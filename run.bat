@echo off

echo get current date and time...
set datetime=%date% %time%
echo %datetime%



echo Pushing changes to remote repository...
git config core.autocrlf false
git add .
git commit -m "update at %datetime%"
git push origin main

echo Done!
