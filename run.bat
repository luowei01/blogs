@echo off

echo get current date and time...
set datetime=%date% %time%
echo %datetime%



echo Pushing changes to remote repository...
git add .
git commit -m "update at %datetime%"
git push origin main

echo Done!
