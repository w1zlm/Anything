/*document.addEventListener("keypress", function(event) {
    if (event.key == "h") {
        alert('hi.');
    }
});*/

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
        doubleAnd.does = ["Turns off the arrow after 1 cell in front of it.", "Передает сигнал в две клетки перед собой.", ".", "."];
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
        tFlipFlopSplit1.name = ["T-Flip-Flop Splitter", "Разветвитель Т-Триггер", ".", "."];
        tFlipFlopSplit1.info = ["On any incoming signal if not active. Or when there are no incoming signals and already active.", "При любом входящем сигнале, если не активна. Или когда нет входящих сигналов и уже активна.", ".", "."];
        tFlipFlopSplit1.does = ["Sends a signal both right and left.", "Передает сигнал влево, и вправо.", ".", "."];
        tFlipFlopSplit1.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow7.png";
        tFlipFlopSplit1.is_pressable = false;
        //tFlipFlopSplit1.custom_data = [1];

        tFlipFlopSplit1.update = (arrow) => {
            if (arrow.signalsCount > 0) arrow.signal = arrow.signal === 3 ? 0 : 3;
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
        tFlipFlopSplit2.name = ["T-Flip-Flop Splitter", "Разветвитель Т-Триггер", ".", "."];
        tFlipFlopSplit2.info = ["On any incoming signal if not active. Or when there are no incoming signals and already active.", "При любом входящем сигнале, если не активна. Или когда нет входящих сигналов и уже активна.", ".", "."];
        tFlipFlopSplit2.does = ["Sends a signal to the right, up and left.", "Передает сигнал влево, вверх, и вправо.", ".", "."];
        tFlipFlopSplit2.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow8.png";
        tFlipFlopSplit2.is_pressable = false;
        //tFlipFlopSplit2.custom_data = [1];

        tFlipFlopSplit2.update = (arrow) => {
            if (arrow.signalsCount > 0) arrow.signal = arrow.signal === 3 ? 0 : 3;
        };
        tFlipFlopSplit2.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === 3) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 0, 1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 0, -1));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, 0));
            }
        }

        // endregion

        // region tFlipFlopSplit3

        tFlipFlopSplit3 = new window.game.FAPI.FModArrowType();
        tFlipFlopSplit3.id = 8;
        tFlipFlopSplit3.name = ["T-Flip-Flop Splitter", "Разветвитель Т-Триггер", ".", "."];
        tFlipFlopSplit3.info = ["On any incoming signal if not active. Or when there are no incoming signals and already active.", "При любом входящем сигнале, если не активна. Или когда нет входящих сигналов и уже активна.", ".", "."];
        tFlipFlopSplit3.does = ["Sends a signal to the top and left.", "Передает сигнал и вверх, и вправо.", ".", "."];
        tFlipFlopSplit3.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow10.png";
        tFlipFlopSplit3.is_pressable = false;
        //tFlipFlopSplit3.custom_data = [1];

        tFlipFlopSplit3.update = (arrow) => {
            if (arrow.signalsCount > 0) arrow.signal = arrow.signal === 3 ? 0 : 3;
        };
        tFlipFlopSplit3.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === 3) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, 0));
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 0, 1));
            }
        }

        // endregion

        // region Arrow9

        Arrow9 = new window.game.FAPI.FModArrowType();
        Arrow9.id = 9;
        Arrow9.name = ["Accumulating Arrow", "Накопляющая Стрелочка", ".", "."];
        Arrow9.info = ["On any incoming signal.", "Любым входящим сигналом.", ".", "."];
        Arrow9.does = ["Sends a signal to the top, if only one incoming signal, else, sends a signal with skipping one cell.", "Передает сигнал вверх, если 1 сигнал, иначе передаёт сигнал через одну клетку вверх.", ".", "."];
        Arrow9.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow9.png";
        Arrow9.is_pressable = false;

        Arrow9.update = (arrow) => {
            if (arrow.signalsCount > 0 && arrow.signalsCount < 2) arrow.signal = 3;
            else if (arrow.signalsCount > 1) arrow.signal = 2;
            else arrow.signal = 0;
        };
        Arrow9.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === 3) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, 0));
            } else if (arrow.signal === 2) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -2, 0));
            }
        }

        // endregion

        // region DiagonalDetector1

        DiagonalDetector = new window.game.FAPI.FModArrowType();
        DiagonalDetector.id = 10;
        DiagonalDetector.name = ["Diagonal Detector", "Диагональный Детектор", ".", "."];
        DiagonalDetector.info = ["If arrow behind is active.", "Если стрелка позади имеет сигнал.", ".", "."];
        DiagonalDetector.does = ["Sends a signal to the top right corner.", "Передает сигнал в правый верхний угол.", ".", "."];
        DiagonalDetector.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow11.png";
        DiagonalDetector.is_pressable = false;

        DiagonalDetector.update = (arrow, chunk, x, y) => {
            arrow.signal = 0;
            const backward_arrow = window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 1, -1);
            if (backward_arrow !== undefined) arrow.signal = backward_arrow.lastSignal !== 0 ? 2 : 0;
        };
        DiagonalDetector.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === 2) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1, 1));
            }
        }

        // endregion

        // region ColorDetector1

        Colors = ['Красный', 'Синий', 'Жёлтый', 'Зелёный', 'Оранжевый', 'Фиолетовый', 'Чёрный'];

        ColorDetector = new window.game.FAPI.FModArrowType();
        ColorDetector.id = 11;
        ColorDetector.name = ["Color Detector", "Цветовой Детектор", ".", "."];
        ColorDetector.info = ["If the arrow behind has a signal of the color you selected.", "Если стрелка позади имеет сигнал выбранного вами цвета.", ".", "."];
        ColorDetector.does = ["Sends signal forward.", "Передает сигнал вперёд.", ".", "."];
        ColorDetector.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow12.png";
        ColorDetector.is_pressable = true;

        ColorDetector.update = (arrow, chunk, x, y) => {
            arrow.signal = 0;
            const backward_arrow = window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, 1, 0);
            if (backward_arrow !== undefined) arrow.signal = backward_arrow.lastSignal === arrow.custom_data[0] + 1 ? arrow.custom_data[0] : 0;
        };
        ColorDetector.transmit = (arrow, chunk, x, y) => {
            if (arrow.signal === arrow.custom_data[0] + 1) {
                window.game.FAPI.SignalUpdater.updateCount(window.game.FAPI.SignalUpdater.adv_getArrowAt(chunk, x, y, arrow.rotation, arrow.flipped, -1));
            }
        }
        ColorDetector.press = (arrow, is_shift) => {
            ColorDetector_Modal.showModal();

            let Color = arrow.custom_data[0];
            ColorDetector_Select.value = Colors[Color];
            ColorDetector_Select.onchange = () => {
                Color = ColorDetector_Select.value
                arrow.custom_data[0] = Colors.indexOf(Color);
            }
        };
        ColorDetector.custom_data = [1];

        let ColorDetector_Modal = window.game.FAPI.ModalHandler.createModal();
        let ColorDetector_Select = window.game.FAPI.ModalHandler.createSelect(ColorDetector_Modal, 'Цвет');
        window.game.FAPI.ModalHandler.createOptions(ColorDetector_Select, Colors);

        // endregion

        game.navigation.gamePage.playerUI.toolbarController.inventory.element.appendChild(ColorDetector_Modal);

        window.game.FAPI.registerMod("zero.astro", (mod) => {
            window.game.FAPI.registerArrows([diagonalSplit1, diagonalSplit2, diagonalSplit3, diagonalSplit4, blueBlocker], mod);
            window.game.FAPI.registerArrows([DiagonalDetector, doubleAnd], mod);
            window.game.FAPI.registerArrows([tFlipFlopSplit1, tFlipFlopSplit2, tFlipFlopSplit3], mod);
            window.game.FAPI.registerArrows([Arrow9, ColorDetector], mod);
            console.log("Mod loaded!");
        });
    });
})();
