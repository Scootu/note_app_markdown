import { contextBridge } from 'electron'

if (process.contextIsolated) {
  throw new Error('context Isolation must be enabled in the BrowserWindow')
}
try {
  contextBridge.exposeInMainWorld('context', {
    //TODO
  })
} catch (error) {
  console.error(error)
}
