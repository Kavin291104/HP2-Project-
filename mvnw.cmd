@echo off
rem ==============================================
rem Maven Wrapper (patched to ignore JAVA_HOME)
rem ==============================================

rem Use java from PATH
set MAVEN_JAVA=java
%MAVEN_JAVA% -version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Java is not installed or not in PATH.
    exit /b 1
)

rem Check if running from correct directory
if not exist "%~dp0.mvn" (
    echo ERROR: Could not find .mvn directory in %~dp0
    exit /b 1
)

rem Call the PowerShell portion of the script
powershell -noprofile -executionpolicy bypass -command ^
    "$scriptDir='%~dp0'; $script='%~nx0'; icm -ScriptBlock ([Scriptblock]::Create((Get-Content -Raw '%~f0'))) -NoNewScope" %*
exit /b %errorlevel%

<# : powershell portion
$ErrorActionPreference = "Stop"
if ($env:MVNW_VERBOSE -eq "true") { $VerbosePreference = "Continue" }

$distributionUrl = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionUrl
if (!$distributionUrl) { Write-Error "cannot read distributionUrl property" }

switch -wildcard -casesensitive ( $($distributionUrl -replace '^.*/','') ) {
  "maven-mvnd-*" {
    $USE_MVND = $true
    $distributionUrl = $distributionUrl -replace '-bin\.[^.]*$',"-windows-amd64.zip"
    $MVN_CMD = "mvnd.cmd"
    break
  }
  default {
    $USE_MVND = $false
    $MVN_CMD = "mvn.cmd"
    break
  }
}

$distributionUrlName = $distributionUrl -replace '^.*/',''
$distributionUrlNameMain = $distributionUrlName -replace '\.[^.]*$','' -replace '-bin$',''
$MAVEN_HOME_PARENT = "$HOME/.m2/wrapper/dists/$distributionUrlNameMain"
$MAVEN_HOME_NAME = ([System.Security.Cryptography.MD5]::Create().ComputeHash([byte[]][char[]]$distributionUrl) | ForEach-Object {$_.ToString("x2")}) -join ''
$MAVEN_HOME = "$MAVEN_HOME_PARENT/$MAVEN_HOME_NAME"

if (Test-Path -Path "$MAVEN_HOME" -PathType Container) {
  Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"
  exit $?
}

$TMP_DOWNLOAD_DIR_HOLDER = New-TemporaryFile
$TMP_DOWNLOAD_DIR = New-Item -Itemtype Directory -Path "$TMP_DOWNLOAD_DIR_HOLDER.dir"
$TMP_DOWNLOAD_DIR_HOLDER.Delete() | Out-Null

New-Item -Itemtype Directory -Path "$MAVEN_HOME_PARENT" -Force | Out-Null

$webclient = New-Object System.Net.WebClient
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$webclient.DownloadFile($distributionUrl, "$TMP_DOWNLOAD_DIR/$distributionUrlName") | Out-Null

Expand-Archive "$TMP_DOWNLOAD_DIR/$distributionUrlName" -DestinationPath "$TMP_DOWNLOAD_DIR" | Out-Null
Rename-Item -Path "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain" -NewName $MAVEN_HOME_NAME | Out-Null
Move-Item -Path "$TMP_DOWNLOAD_DIR/$MAVEN_HOME_NAME" -Destination $MAVEN_HOME_PARENT | Out-Null
Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null

Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"
#>
