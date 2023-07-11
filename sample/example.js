/**
    Note that .. refer to plugin datafolder path.
*/
import * as Std from "../libs/std/std.mjs";

// Where Loader got from?
// Ans: Loader registered manualy in script by plugin.

console.info("Hi");

Std.Scheduler.task(() => {

    // Sync task that executes after start of the script.

    Std.Listener.on(Loader, "PlayerJumpEvent", (event) => 
    { event.getPlayer().sendMessage("You jumped.") })
    
    Std.Listener.on(Loader, "ScriptDisableEvent", (event) => {console.info("BYE")});

    class OwnCommand extends Std.Command {

        constructor() {
            super("owncommand")
        }

        execute(sender, args) {
            sender.sendMessage("Yo")
        }
        tab(sender, args) {
            sender.sendMessage("Wassup")
        }

    }

    let owncommand = new OwnCommand();
    owncommand.register();
});
