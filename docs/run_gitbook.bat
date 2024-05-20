@echo off

set datetime=%date% %time%
echo %datetime%

echo Building GitBook...
gitbook build ./ ./docs

echo Done!