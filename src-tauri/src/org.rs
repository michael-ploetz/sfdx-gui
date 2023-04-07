use serde::{Deserialize, Serialize};
use std::process::Command;

#[derive(Debug, Deserialize, Serialize)]
pub struct OrgListResponse {
    status: i32,
    result: Vec<OrgListItem>,
}

#[derive(Debug, Deserialize, Serialize)]
struct OrgListItem {
    username: String,
    connected_status: String,
    is_default_username: bool,
}

#[derive(Debug, Serialize)]
pub enum ListOrgsError {
    SfdxError(String),
    JsonError(String),
    Utf8Error(String),
}

impl std::error::Error for ListOrgsError {}

impl std::fmt::Display for ListOrgsError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            ListOrgsError::SfdxError(message) => write!(f, "SFDX error: {}", message),
            ListOrgsError::JsonError(message) => write!(f, "JSON error: {}", message),
            ListOrgsError::Utf8Error(message) => write!(f, "UTF-8 error: {}", message),
        }
    }
}

impl From<serde_json::Error> for ListOrgsError {
    fn from(error: serde_json::Error) -> Self {
        ListOrgsError::JsonError(error.to_string())
    }
}

impl From<std::io::Error> for ListOrgsError {
    fn from(error: std::io::Error) -> Self {
        ListOrgsError::SfdxError(error.to_string())
    }
}

impl From<std::string::FromUtf8Error> for ListOrgsError {
    fn from(error: std::string::FromUtf8Error) -> Self {
        ListOrgsError::Utf8Error(error.to_string())
    }
}

#[tauri::command]
pub fn list_orgs() -> Result<OrgListResponse, ListOrgsError> {
    println!("Message from Rust: {}", "what");


    let output = Command::new("sfdx")
        .arg("--version")
        .output()?;

        println!("Message from Rust: {}", "what2");

    let stdout = String::from_utf8(output.stdout)?;
    println!("{}", stdout);

    let response: OrgListResponse = serde_json::from_str(&stdout)?;

    Ok(response)
}
