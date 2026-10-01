@echo off
if exist "standalone.html" (
    start "" "standalone.html"
) else (
    npm.cmd run dev
)
