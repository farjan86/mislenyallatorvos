@echo off
rem ============================================================
rem  commit.bat - valtozasok feltoltese GitHubra
rem  Hasznalat:
rem    commit.bat                -> automatikus uzenettel commitol
rem    commit.bat "sajat uzenet" -> megadott uzenettel commitol
rem ============================================================
chcp 65001 >nul
cd /d "%~dp0"

set "MSG=%~1"
if "%MSG%"=="" set "MSG=Frissites %date% %time:~0,5%"

echo.
echo [1/3] Valtozasok hozzaadasa...
git add -A

git diff --cached --quiet
if %errorlevel%==0 (
    echo Nincs valtozas, nincs mit feltolteni.
    goto :end
)

echo [2/3] Commit: "%MSG%"
git commit -m "%MSG%"
if errorlevel 1 goto :error

echo [3/3] Push a GitHubra (origin/main)...
git pull --rebase origin main
if errorlevel 1 goto :error
git push origin main
if errorlevel 1 goto :error

echo.
echo KESZ! A valtozasok fent vannak: https://github.com/farjan86/mislenyallatorvos
echo A GitHub Pages 1-2 percen belul frissul.
goto :end

:error
echo.
echo HIBA tortent! Nezd meg a fenti uzenetet.

:end
echo.
pause
