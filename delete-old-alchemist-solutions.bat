@echo off
REM Deletes leftover empty AlchemistSolutions folder after Cursor releases locks.
REM Close Cursor first, then double-click this file.
rmdir /s /q "C:\ceo\felix\AlchemistSolutions"
if exist "C:\ceo\felix\AlchemistSolutions" (
  echo Still locked. Close Cursor completely and run again.
  pause
) else (
  echo Deleted C:\ceo\felix\AlchemistSolutions
  pause
)
