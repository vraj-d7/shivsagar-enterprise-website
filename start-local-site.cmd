@echo off
rem Starts the Shiv Sagar website locally at http://localhost:4330 and opens it in your browser.
rem Safe to double-click again: if it's already running, it just opens the page.
cd /d "%~dp0"
if not exist node_modules (
  echo Installing packages, first run only...
  call npm install
)
call npx astro dev status | find "running at" >nul
if errorlevel 1 (
  call npx astro dev --background --port 4330
)
start "" http://localhost:4330
