(() => {
    window.document.addEventListener("fapiloaded", function() {
        // region diagonalSplitter1

        diagonalSplit1 = new window.game.FAPI.FModArrowType();
        diagonalSplit1.id = 0;
        diagonalSplit1.name = ["Diagonal splitter", "Диагональный разветвлитель", ".", "."];
        diagonalSplit1.info = ["On any incoming signal.", "Любым входящим сигналом.", ".", "."];
        diagonalSplit1.does = ["Sends a signal to the left upper corner, and right upper corner.", "Передаёт сигнал в левый верхний угол, и правый верхний угол.", ".", "."];
        diagonalSplit1.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow1.png";
        diagonalSplit1.is_pressable = false;

        diagonalSplit1.update = (arrow) => {
            if (arrow.signalsCount > 0) arrow.signal = 2;
            else arrow.signal = 0;
        };
        diagonalSplit1.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === 2) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, 1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, -1));
            }
        }
        /*diagonalSplit1.block = (arrow, chunk, x, y) => {
            if (arrow.signal === 2) {
                let narrow = window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1);
                window.game.FAPI.SignalUpdater.blockSignal(narrow);
            }
        }*/
        /*diagonalSplit1.press = (arrow, is_shift) => {
            arrow.signal = 6;
        }*/

        // endregion

        // region diagonalSplitter2

        diagonalSplit2 = new window.game.FAPI.FModArrowType();
        diagonalSplit2.id = 1;
        diagonalSplit2.name = ["Diagonal splitter", "Диагональный разветвлитель", ".", "."];
        diagonalSplit2.info = ["On any incoming signal.", "Любым входящим сигналом.", ".", "."];
        diagonalSplit2.does = ["Sends a signal to the left bottom corner, and right upper corner.", "Передаёт сигнал в левый нижний угол, и правый верхний угол.", ".", "."];
        diagonalSplit2.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow2.png";
        diagonalSplit2.is_pressable = false;

        diagonalSplit2.update = (arrow) => {
            if (arrow.signalsCount > 0) arrow.signal = 2;
            else arrow.signal = 0;
        };
        diagonalSplit2.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === 2) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, 1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 1, -1));
            }
        }

        // endregion

        // region diagonalSplitter3

        diagonalSplit3 = new window.game.FAPI.FModArrowType();
        diagonalSplit3.id = 2;
        diagonalSplit3.name = ["Diagonal splitter", "Диагональный разветвлитель", ".", "."];
        diagonalSplit3.info = ["On any incoming signal.", "Любым входящим сигналом.", ".", "."];
        diagonalSplit3.does = ["Sends a signal to the left upper corner, right upper corner, and right bottom corner.", "Передаёт сигнал в левый верхний угол, правый верхний угол, и правый нижний угол.", ".", "."];
        diagonalSplit3.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow3.png";
        diagonalSplit3.is_pressable = false;

        diagonalSplit3.update = (arrow) => {
            if (arrow.signalsCount > 0) arrow.signal = 2;
            else arrow.signal = 0;
        };
        diagonalSplit3.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === 2) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, -1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, 1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 1, 1));
            }
        }

        // endregion

        // region diagonalSplitter4

        diagonalSplit4 = new window.game.FAPI.FModArrowType();
        diagonalSplit4.id = 3;
        diagonalSplit4.name = ["Diagonal splitter", "Диагональный разветвлитель", ".", "."];
        diagonalSplit4.info = ["On any incoming signal.", "Любым входящим сигналом.", ".", "."];
        diagonalSplit4.does = ["Sends a signal to all diagonal directions.", "Передаёт сигнал во все стороны по диагонали.", ".", "."];
        diagonalSplit4.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow4.png";
        diagonalSplit4.is_pressable = false;

        diagonalSplit4.update = (arrow) => {
            if (arrow.signalsCount > 0) arrow.signal = 2;
            else arrow.signal = 0;
        };
        diagonalSplit4.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === 2) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, -1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, 1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 1, 1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 1, -1));
            }
        }

        // endregion

        // region blueBlocker1

        blueBlocker = new window.game.FAPI.FModArrowType();
        blueBlocker.id = 4;
        blueBlocker.name = ["Blue blocker", "Синий блокер", ".", "."];
        blueBlocker.info = ["On any incoming signal.", "Любым входящим сигналом.", ".", "."];
        blueBlocker.does = ["Turns off the arrow after 1 cell in front of the blocker.", "Выключает стрелку через 1 клетку перед собой.", ".", "."];
        blueBlocker.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow5.png";
        blueBlocker.is_pressable = false;

        blueBlocker.update = (arrow) => {
            if (arrow.signalsCount > 0) arrow.signal = 2;
            else arrow.signal = 0;
        };
        blueBlocker.block = (arrow, chunk, x, y) => {
            if (arrow.signal === 2) {
                window.game.FAPI.SignalUpdater.blockSignal(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -2));
            }
        }

        // endregion

        // region doubleAnd1

        doubleAnd = new window.game.FAPI.FModArrowType();
        doubleAnd.id = 5;
        doubleAnd.name = ["\"And\" blue splitter", "\"И\" синий раздвоитель", ".", "."];
        doubleAnd.info = ["On at least two incoming signals.", "При минимум двух входящих сигналах.", ".", "."];
        doubleAnd.does = ["Turns off the arrow after 1 cell in front of it", "Передает сигнал в две клетки перед собой.", ".", "."];
        doubleAnd.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow6.png";
        doubleAnd.is_pressable = false;

        doubleAnd.update = (arrow) => {
            if (arrow.signalsCount > 1) arrow.signal = 2;
            else arrow.signal = 0;
        };
        doubleAnd.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === 2) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -2));
            }
        }

        // endregion

        // region tFlipFlopSplit1

        tFlipFlopSplit1 = new window.game.FAPI.FModArrowType();
        tFlipFlopSplit1.id = 6;
        tFlipFlopSplit1.name = ["T-Flip-Flop Splitter", "Раздвоитель Т-Триггер", ".", "."];
        tFlipFlopSplit1.info = ["On any incoming signal if not active. Or when there are no incoming signals and already active.", "При любом входящем сигнале, если не активна. Или когда нет входящих сигналов и уже активна.", ".", "."];
        tFlipFlopSplit1.does = ["Sends a signal both right and left.", "Передает сигнал влево, и вправо", ".", "."];
        tFlipFlopSplit1.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow7.png";
        tFlipFlopSplit1.is_pressable = false;
        tFlipFlopSplit1.custom_data = 1;

        tFlipFlopSplit1.update = (arrow) => {
            if (arrow.signalsCount > 0) {
                if (arrow.custom_data === 1) {
                    arrow.custom_data = 2;
                    arrow.signal = 3;
                } else if (arrow.custom_data === 2) {
                    arrow.custom_data = 1;
                    arrow.signal = 0;
                };
            }
        };
        tFlipFlopSplit1.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === 3) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 0, 1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 0, -1));
            }
        }

        // endregion

        // region tFlipFlopSplit2

        tFlipFlopSplit2 = new window.game.FAPI.FModArrowType();
        tFlipFlopSplit2.id = 7;
        tFlipFlopSplit2.name = ["T-Flip-Flop Splitter", "Раздвоитель Т-Триггер", ".", "."];
        tFlipFlopSplit2.info = ["On any incoming signal if not active. Or when there are no incoming signals and already active.", "При любом входящем сигнале, если не активна. Или когда нет входящих сигналов и уже активна.", ".", "."];
        tFlipFlopSplit2.does = ["Sends a signal to the right, up and left.", "Передает сигнал влево, вверх, и вправо", ".", "."];
        tFlipFlopSplit2.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow8.png";
        tFlipFlopSplit2.is_pressable = false;
        tFlipFlopSplit2.custom_data = 1;

        tFlipFlopSplit2.update = (arrow) => {
            if (arrow.signalsCount > 0) {
                if (arrow.custom_data === 1) {
                    arrow.custom_data = 2;
                    arrow.signal = 3;
                } else if (arrow.custom_data === 2) {
                    arrow.custom_data = 1;
                    arrow.signal = 0;
                };
            }
        };
        tFlipFlopSplit2.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === 3) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 0, 1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 0, -1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, 0));
            }
        }

        // endregion

        window.game.FAPI.registerMod("Astro", "zero.astro", "zero", "???", (mod) => {
            window.game.FAPI.registerArrows([diagonalSplit1, diagonalSplit2, diagonalSplit3, diagonalSplit4, blueBlocker], mod);
            window.game.FAPI.registerArrows([doubleAnd, tFlipFlopSplit1, tFlipFlopSplit2], mod);
            console.log("Mod loaded!");
        });
    });
})();
