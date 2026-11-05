/*************************************************************************
 * 3. DUAL BACKUP STORAGE ENGINE (LocalStorage + IndexedDB Mirror)
 *************************************************************************/
const STORAGE_KEY = "CAMBRIDGE_SCI_Y1_STATE_V2";
const SNAPSHOTS_KEY = "CAMBRIDGE_SCI_Y1_SNAPSHOTS_V2";
const IDB_NAME = "CambridgeScienceY1DB";
const IDB_STORE = "appStateStore";

class BackupStorageEngine {
  constructor() {
    this.db = null;
    this.initIndexedDB();
  }

  initIndexedDB() {
    if (!window.indexedDB) return;
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE);
      }
    };
    req.onsuccess = (e) => {
      this.db = e.target.result;
      // Sync check: if localStorage is empty but IndexedDB has backup, recover automatically
      const lsData = localStorage.getItem(STORAGE_KEY);
      if (!lsData) {
        this.readFromIDB(STORAGE_KEY, (recovered) => {
          if (recovered) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(recovered));
            if (window.app) window.app.reloadStateFromStorage();
          }
        });
      }
    };
  }

  writeToIDB(key, value) {
    if (!this.db) return;
    try {
      const tx = this.db.transaction([IDB_STORE], "readwrite");
      tx.objectStore(IDB_STORE).put(value, key);
    } catch (err) {
      console.warn("IndexedDB mirror write warning:", err);
    }
  }

  readFromIDB(key, callback) {
    if (!this.db) return callback(null);
    try {
      const tx = this.db.transaction([IDB_STORE], "readonly");
      const req = tx.objectStore(IDB_STORE).get(key);
      req.onsuccess = () => callback(req.result || null);
      req.onerror = () => callback(null);
    } catch (err) {
      callback(null);
    }
  }

  saveState(stateObj) {
    stateObj.lastUpdated = new Date().toISOString();
    const serialized = JSON.stringify(stateObj);
    localStorage.setItem(STORAGE_KEY, serialized);
    this.writeToIDB(STORAGE_KEY, stateObj);
    return stateObj.lastUpdated;
  }

  loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      console.error("Failed to parse state:", e);
      return null;
    }
  }

  getSnapshots() {
    try {
      const raw = localStorage.getItem(SNAPSHOTS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  saveSnapshots(list) {
    localStorage.setItem(SNAPSHOTS_KEY, JSON.stringify(list));
    this.writeToIDB(SNAPSHOTS_KEY, list);
  }
}
