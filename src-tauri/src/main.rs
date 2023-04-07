#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;

pub mod org;

fn main() {
  tauri::Builder::default()
  .setup(|app| {
    #[cfg(debug_assertions)] // only include this code on debug builds
    {
      let window = app.get_window("main").unwrap();
      window.open_devtools();
    }
    Ok(())
  })
    .invoke_handler(tauri::generate_handler![org::list_orgs])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
