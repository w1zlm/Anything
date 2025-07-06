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

~F4::
{
    Run "roblox://"
}

~F5::
{
    global laptop

    if (WinExist("OP Auto Clicker 3.1.1")) {
        return
    }

    if (laptop) {
        Run "C:\Users\vikto\Documents\AutoClicker-3.1.1.exe"
    } else {
        Run "C:\Users\Artem\Documents\AutoClicker-3.1.1.exe"
    }

    WinWait("OP Auto Clicker 3.1.1")

    Send("{F5}") ; Simulate pressing F5 to start the auto clicker

    WinMinimize("OP Auto Clicker 3.1.1")
}

~F6::
{
    x := 0, y := 0
    MouseGetPos &x, &y
    A_Clipboard := x ", " y
}

~F7::
{
    global currentDpi, laptop

    if (WinExist("Natro Macro")) {
        return
    }

    if (currentDpi = 125 AND laptop) {
        SetDisplayScale(100)
    }

    if (laptop) {
        Run "C:\Users\vikto\Documents\Natro_Macro_v1.0.1\Natro_Macro_v1.0.1\START.bat"
    } else {
        Run "C:\Users\Artem\Documents\Natro_Macro_v1.0.1\Natro_Macro_v1.0.1\START.bat"
    }

    if (!laptop) {
        return
    }

    Sleep(2000)

    SetTimer WatchApp, 500

    WatchApp() {
        if (!WinExist("Natro Macro")) {
            SetTimer WatchApp, 0
            SetDisplayScale(125)
        }
    }
}

~F8::
{
    Run "roblox://experiences/start?placeId=1537690962"
}

~F9::
{
    Run "roblox-studio://"
}

~F10::
{
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
        return
    }

    if (laptop) {
        Run "C:\Users\vikto\Documents\spencerMacro.exe"
    }
    else {
        Run "C:\Users\Artem\Documents\spencerMacro.exe"
    }
}
