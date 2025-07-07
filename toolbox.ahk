#Requires AutoHotkey v2.0
#SingleInstance Force

laptop := A_ComputerName = "WS-NOTE" ? true : false

hDC := DllCall("GetDC", "ptr", 0, "ptr")
dpi := DllCall("GetDeviceCaps", "ptr", hDC, "int", 88, "int")
DllCall("ReleaseDC", "ptr", 0, "ptr", hDC)

global currentDpi := Round(dpi / 96 * 100)

SetDisplayScale(scale) {
    global currentDpi := scale
    Run "SetDpi.exe " scale
}

print(text) {
    global laptop

    time := "[" A_Hour ":" A_Min ":" A_Sec "] "
    if (laptop) {
        FileAppend time text "`n", "C:\Users\vikto\Documents\ahk\log.txt"
    } else {
        FileAppend time text "`n", "C:\Users\Artem\Documents\ahk\log.txt"
    }
}

~F4::
{
    print("Opened roblox")
    Run "roblox://"

    WinWait("Roblox")
    WinWaitClose("Roblox", "")

    print("Closed roblox")
}

~F5::
{
    global laptop

    if (WinExist("OP Auto Clicker 3.1.1")) {
        print("Toggled OP Auto Clicker")
        return
    }

    print("Opened OP Auto Clicker")

    if (laptop) {
        Run "C:\Users\vikto\Documents\AutoClicker-3.1.1.exe"
    } else {
        Run "C:\Users\Artem\Documents\AutoClicker-3.1.1.exe"
    }

    WinWait("OP Auto Clicker 3.1.1")

    Send("{F5}") ; Simulate pressing F5 to start the auto clicker

    WinMinimize("OP Auto Clicker 3.1.1")

    WinWaitClose("OP Auto Clicker 3.1.1", "")

    print("Closed OP Auto Clicker")
}

~F6::
{
    x := 0, y := 0
    MouseGetPos &x, &y
    A_Clipboard := x ", " y

    print("Mouse position copied to clipboard: " A_Clipboard)
}

~F7::
{
    global currentDpi, laptop

    if (WinExist("Natro Macro")) {
        print("Attempted to open Natro Macro, but it is already running")
        return
    }

    if (currentDpi = 125 AND laptop) {
        print("Adjusted display scale to 100%")
        SetDisplayScale(100)
    }

    print("Opened Natro Macro")

    if (laptop) {
        Run "C:\Users\vikto\Documents\Natro_Macro_v1.0.1\Natro_Macro_v1.0.1\START.bat"
    } else {
        Run "C:\Users\Artem\Documents\Natro_Macro_v1.0.1\START.bat"
    }

    if (!laptop) {
        return
    }

    WinWait("Natro Macro")

    WinWaitClose("Natro Macro", "")

    print("Closed Natro Macro")

    print("Adjusted display scale to 125%")
    SetDisplayScale(125)
}

~F8::
{
    print("Opened Bee Swarm Simulator")
    Run "roblox://experiences/start?placeId=1537690962"

    WinWait("Roblox")
    WinWaitClose("Roblox", "")

    print("Closed Bee Swarm Simulator")
}

~F9::
{
    print("Opened Roblox Studio")
    Run "roblox-studio://"

    WinWait("Roblox Studio")
    WinWaitClose("Roblox Studio", "")

    print("Closed Roblox Studio")
}

~F10::
{
    print("Displayed help message")
    MsgBox(
        "F4 - Open Roblox`n" 
        "F5 - Open Or Toggle OP Auto Clicker`n" 
        "F6 - Get Mouse Position`n" 
        "F7 - Open Natro Macro`n" 
        "F8 - Open Bee Swarm`n" 
        "F9 - Open Roblox Studio`n" 
        "F10 - Show this help message`n"
        "F12 - Open Roblox Macro Client`n"
    )
}

~F12::
{   
    global laptop
    
    if (WinExist("Roblox Macro Client")) {
        print("Attempted to open Roblox Macro Client, but it is already running")
        return
    }
    print("Opened Roblox Macro Client")

    if (laptop) {
        Run "C:\Users\vikto\Documents\spencerMacro.exe"
    }
    else {
        Run "C:\Users\Artem\Documents\spencerMacro.exe"
    }

    WinWait("Roblox Macro Client")
    WinWaitClose("Roblox Macro Client", "")

    print("Closed Roblox Macro Client")
}

print("Script started")

OnExit(ExitHandler)

ExitHandler(ExitReason, ExitCode)
{
    print("Script stopped")
}
