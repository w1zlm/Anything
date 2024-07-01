/*document.addEventListener("keypress", function(event) {
if (event.key == "h") {
alert('hi.');
}
});*/

const FAPI = window.fapi;
const ModalHandler = FAPI.imodules.ModalHandler;
const ChunkUpdates = FAPI.routes.ChunkUpdates;

const mod = FAPI.registerMod("zero.astro");

// region diagonalSplitter1

const diagonalSplit1 = mod.registerArrow(0)
diagonalSplit1.name = ["Diagonal splitter", "Диагональный разветвлитель", "Not supported", "Not supported"];
diagonalSplit1.activation = ["On any incoming signal.", "Любым входящим сигналом.", "Not supported", "Not supported"];
diagonalSplit1.action = ["Sends a signal to the left upper and right upper corner.", "Передаёт сигнал в левый верхний правый верхний угол.", "Not supported", "Not supported"];
diagonalSplit1.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow1.png";
diagonalSplit1.clickable = false;

diagonalSplit1.update = (arrow) => {
    arrow.signal = 0;
    if (arrow.signalsCount > 0) arrow.signal = 2;
};
diagonalSplit1.transmit = (arrow) => {
    if (arrow.signal === 2) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, -1));
    }
}

// endregion

// region diagonalSplitter2

const diagonalSplit2 = mod.registerArrow(1)
diagonalSplit2.name = ["Diagonal splitter", "Диагональный разветвлитель", "Not supported", "Not supported"];
diagonalSplit2.activation = ["On any incoming signal.", "Любым входящим сигналом.", "Not supported", "Not supported"];
diagonalSplit2.action = ["Sends a signal to the left bottom corner, and right upper corner.", "Передаёт сигнал в левый нижний угол, и правый верхний угол.", "Not supported", "Not supported"];
diagonalSplit2.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow2.png";
diagonalSplit2.clickable = false;

diagonalSplit2.update = (arrow) => {
    if (arrow.signalsCount > 0) arrow.signal = 2;
    else arrow.signal = 0;
};
diagonalSplit2.transmit = (arrow) => {
    if (arrow.signal === 2) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 1, -1));
    }
}

// endregion

// region diagonalSplitter3

const diagonalSplit3 = mod.registerArrow(2)
diagonalSplit3.name = ["Diagonal splitter", "Диагональный разветвлитель", "Not supported", "Not supported"];
diagonalSplit3.activation = ["On any incoming signal.", "Любым входящим сигналом.", "Not supported", "Not supported"];
diagonalSplit3.action = ["Sends a signal to the left upper corner, right upper corner, and right bottom corner.", "Передаёт сигнал в левый верхний угол, правый верхний угол, и правый нижний угол.", "Not supported", "Not supported"];
diagonalSplit3.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow3.png";
diagonalSplit3.clickable = false;

diagonalSplit3.update = (arrow) => {
    if (arrow.signalsCount > 0) arrow.signal = 2;
    else arrow.signal = 0;
};
diagonalSplit3.transmit = (arrow) => {
    if (arrow.signal === 2) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, -1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 1, 1));
    }
}

// endregion

// region diagonalSplitter4

const diagonalSplit4 = mod.registerArrow(3)
diagonalSplit4.name = ["Diagonal splitter", "Диагональный разветвлитель", "Not supported", "Not supported"];
diagonalSplit4.activation = ["On any incoming signal.", "Любым входящим сигналом.", "Not supported", "Not supported"];
diagonalSplit4.action = ["Sends a signal to all diagonal directions.", "Передаёт сигнал во все стороны по диагонали.", "Not supported", "Not supported"];
diagonalSplit4.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow4.png";
diagonalSplit4.clickable = false;

diagonalSplit4.update = (arrow) => {
    if (arrow.signalsCount > 0) arrow.signal = 2;
    else arrow.signal = 0;
};
diagonalSplit4.transmit = (arrow) => {
    if (arrow.signal === 2) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, -1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 1, 1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 1, -1));
    }
}

// endregion

// region blueBlocker1

const blueBlocker = mod.registerArrow(4)
blueBlocker.name = ["Blue blocker", "Синий блокер", "Not supported", "Not supported"];
blueBlocker.activation = ["On any incoming signal.", "Любым входящим сигналом.", "Not supported", "Not supported"];
blueBlocker.action = ["Turns off the arrow after 1 cell in front of the blocker.", "Выключает стрелку через 1 клетку перед собой.", "Not supported", "Not supported"];
blueBlocker.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow5.png";
blueBlocker.clickable = false;

blueBlocker.update = (arrow) => {
    if (arrow.signalsCount > 0) arrow.signal = 2;
    else arrow.signal = 0;
};
blueBlocker.block = (arrow) => {
    if (arrow.signal === 2) {
        ChunkUpdates.blockSignal(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -2));
    }
}

// endregion

// region doubleAnd1

const doubleAnd = mod.registerArrow(5)
doubleAnd.name = ["\"And\" blue splitter", "\"И\" синий раздвоитель", "Not supported", "Not supported"];
doubleAnd.activation = ["On at least two incoming signals.", "При минимум двух входящих сигналах.", "Not supported", "Not supported"];
doubleAnd.action = ["Turns off the arrow after 1 cell in front of it.", "Передает сигнал в две клетки перед собой.", "Not supported", "Not supported"];
doubleAnd.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow6.png";
doubleAnd.clickable = false;

doubleAnd.update = (arrow) => {
    if (arrow.signalsCount > 1) arrow.signal = 2;
    else arrow.signal = 0;
};
doubleAnd.transmit = (arrow) => {
    if (arrow.signal === 2) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -2));
    }
}

// endregion

// region tFlipFlopSplit1

const tFlipFlopSplit1 = mod.registerArrow(6)
tFlipFlopSplit1.name = ["T-Flip-Flop Splitter", "Разветвитель Т-Триггер", "Not supported", "Not supported"];
tFlipFlopSplit1.activation = ["On any incoming signal if not active. Or when there are no incoming signals and already active.", "При любом входящем сигнале, если не активна. Или когда нет входящих сигналов и уже активна.", "Not supported", "Not supported"];
tFlipFlopSplit1.action = ["Sends a signal both right and left.", "Передает сигнал влево, и вправо.", "Not supported", "Not supported"];
tFlipFlopSplit1.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow7.png";
tFlipFlopSplit1.clickable = false;

tFlipFlopSplit1.update = (arrow) => {
    if (arrow.signalsCount > 0) arrow.signal = arrow.signal === 3 ? 0 : 3;
};
tFlipFlopSplit1.transmit = (arrow) => {
    if (arrow.signal === 3) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 0, 1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 0, -1));
    }
}

// endregion

// region tFlipFlopSplit2

const tFlipFlopSplit2 = mod.registerArrow(7)
tFlipFlopSplit2.name = ["T-Flip-Flop Splitter", "Разветвитель Т-Триггер", "Not supported", "Not supported"];
tFlipFlopSplit2.activation = ["On any incoming signal if not active. Or when there are no incoming signals and already active.", "При любом входящем сигнале, если не активна. Или когда нет входящих сигналов и уже активна.", "Not supported", "Not supported"];
tFlipFlopSplit2.action = ["Sends a signal to the right, up and left.", "Передает сигнал влево, вверх, и вправо.", "Not supported", "Not supported"];
tFlipFlopSplit2.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow8.png";
tFlipFlopSplit2.clickable = false;

tFlipFlopSplit2.update = (arrow) => {
    if (arrow.signalsCount > 0) arrow.signal = arrow.signal === 3 ? 0 : 3;
};
tFlipFlopSplit2.transmit = (arrow) => {
    if (arrow.signal === 3) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 0, 1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 0, -1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 0));
    }
}

// endregion

// region tFlipFlopSplit3

const tFlipFlopSplit3 = mod.registerArrow(8)
tFlipFlopSplit3.name = ["T-Flip-Flop Splitter", "Разветвитель Т-Триггер", "Not supported", "Not supported"];
tFlipFlopSplit3.activation = ["On any incoming signal if not active. Or when there are no incoming signals and already active.", "При любом входящем сигнале, если не активна. Или когда нет входящих сигналов и уже активна.", "Not supported", "Not supported"];
tFlipFlopSplit3.action = ["Sends a signal to the top and left.", "Передает сигнал и вверх, и вправо.", "Not supported", "Not supported"];
tFlipFlopSplit3.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow10.png";
tFlipFlopSplit3.clickable = false;

tFlipFlopSplit3.update = (arrow) => {
    if (arrow.signalsCount > 0) arrow.signal = arrow.signal === 3 ? 0 : 3;
};
tFlipFlopSplit3.transmit = (arrow) => {
    if (arrow.signal === 3) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 0));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 0, 1));
    }
}

// endregion

// region arrow9

const arrow9 = mod.registerArrow(9)
arrow9.name = ["Charging Arrow", "Накопляющая Стрелочка", "Not supported", "Not supported"];
arrow9.activation = ["On any incoming signal.", "Любым входящим сигналом.", "Not supported", "Not supported"];
arrow9.action = ["Sends a signal to the top, if only one incoming signal, else, sends a signal with skipping one cell.", "Передает сигнал вверх, если 1 сигнал, иначе передаёт сигнал через одну клетку вверх.", "Not supported", "Not supported"];
arrow9.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow9.png";
arrow9.clickable = false;

arrow9.update = (arrow) => {
    if (arrow.signalsCount > 0 && arrow.signalsCount < 2) arrow.signal = 3;
    else if (arrow.signalsCount > 1) arrow.signal = 2;
    else arrow.signal = 0;
};
arrow9.transmit = (arrow) => {
    if (arrow.signal === 3) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 0));
    } else if (arrow.signal === 2) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -2, 0));
    }
}

// endregion

// region DiagonalDetector1

const diagonalDetector = mod.registerArrow(10)
diagonalDetector.name = ["Diagonal Detector", "Диагональный Детектор", "Not supported", "Not supported"];
diagonalDetector.activation = ["If arrow behind is active.", "Если стрелка позади имеет сигнал.", "Not supported", "Not supported"];
diagonalDetector.action = ["Sends a signal to the top right corner.", "Передает сигнал в правый верхний угол.", "Not supported", "Not supported"];
diagonalDetector.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow11.png";
diagonalDetector.clickable = false;

diagonalDetector.update = (arrow) => {
    arrow.signal = 0;
    const backward_arrow = ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 1, -1);
    if (backward_arrow !== undefined) arrow.signal = backward_arrow.lastSignal !== 0 ? 2 : 0;
};
diagonalDetector.transmit = (arrow) => {
    if (arrow.signal === 2) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 1));
    }
}

// endregion

// region colorDetector1

const colors = ['Красный', 'Синий', 'Жёлтый', 'Зелёный', 'Оранжевый', 'Фиолетовый', 'Чёрный'];
colorDetector = mod.registerArrow(11);
colorDetector.name = ["Color Detector", "Цветовой Детектор", "Not supported", "Not supported"];
colorDetector.activation = ["If the arrow behind has a signal of the Color you selected.", "Если стрелка позади имеет сигнал выбранного вами цвета.", "Not supported", "Not supported"];
colorDetector.action = ["Sends signal forward.", "Передает сигнал вперёд.", "Not supported", "Not supported"];
colorDetector.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow12.png";
colorDetector.clickable = true;
colorDetector.update = (arrow) => {
    arrow.signal = 0;
    const backward_arrow = ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 1, 0);
    if (backward_arrow !== undefined) arrow.signal = backward_arrow.lastSignal === arrow.custom_data[0] + 1 ? arrow.custom_data[0] + 1 : 0;
};
colorDetector.transmit = (arrow) => {
    if (arrow.signal === arrow.custom_data[0] + 1) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1));
    }
}
colorDetector.click = (arrow, is_shift) => {
    const color = arrow.custom_data[0];
    const colorModal = ModalHandler.showModal()
    const selectColor = colorModal.createSelect('Цвет', colors);
    selectColor.value = colors[color];
    selectColor.onchange = () => {
        arrow.custom_data[0] = colors.indexOf(selectColor.value);
    }
};
colorDetector.custom_data = [1];

// endregion

// region colorSaver1

const colorSaver = mod.registerArrow(12)
colorSaver.name = ["color-saver Arrow", "Цвето-сохраняющая Стрелка", "Not supported", "Not supported"];
colorSaver.activation = ["On any incoming signal.", "Любым входящим сигналом.", "Not supported", "Not supported"];
colorSaver.action = ["Sends a signal to all diagonal directions.", "Передаёт сигнал во все стороны по диагонали.", "Not supported", "Not supported"];
colorSaver.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow13.png";
colorSaver.clickable = false;

colorSaver.update = (arrow) => {
    arrow.signal = 0;
    if (arrow.refs[0] !== undefined) arrow.signal = arrow.refs[0].lastSignal;
};
colorSaver.transmit = (arrow) => {
    if (arrow.signal > 0) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1));
    }
}

// endregion

// region adder1

const adder = mod.registerArrow(13)
adder.name = ["Adder", "Сумматор", "Not supported", "Not supported"];
adder.activation = ["On any incoming signal.", "Любым входящим сигналом.", "Not supported", "Not supported"];
adder.action = ["Works like full adder. (on the left gives the result, and on the right the remainder)", "Работает как полный сумматор. (слева выдаёт результат, а справа остаток)", "Not supported", "Not supported"];
adder.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow14.png";
adder.clickable = false;

adder.update = (arrow) => {
    if (arrow.signalsCount > 0 && arrow.signalsCount < 4) arrow.signal = arrow.signalsCount;
    else arrow.signal = 0;
};
adder.transmit = (arrow) => {
    if (arrow.signal === 1) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 0, -1));
    } else if (arrow.signal === 2) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 0, 1));
    } else if (arrow.signal === 3) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 0, -1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 0, 1));
    }
}

// endregion

// region block1

const block = mod.registerArrow(14)
block.name = ["Block", "Блок", "Not supported", "Not supported"];
block.activation = ["On any incoming signal.", "Любым входящим сигналом.", "Not supported", "Not supported"];
block.action = ["Does nothing.", "Ничего не делает.", "Not supported", "Not supported"];
block.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/block.png";
block.clickable = false;

block.update = (arrow) => {
    arrow.signal = 0;
};
block.transmit = (arrow) => {}

// endregion

// region colorExtracter1

const colorExtracter = mod.registerArrow(15)
colorExtracter.name = ["Color Extracter", "Экстрактор Цвета", "Not supported", "Not supported"];
colorExtracter.activation = ["On any incoming signal.", "Любым входящим сигналом.", "Not supported", "Not supported"];
colorExtracter.action = ["Processes the signal color into `n` and transmits `n` signals to the arrow in front.", "Перерабатывает цвет сигнала в `n` и передаёт на стрелку спереди `n` сигналов.", "Not supported", "Not supported"];
colorExtracter.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow15.png";
colorExtracter.clickable = false;

colorExtracter.update = (arrow) => {
    arrow.signal = 0;
    if (arrow.refs[0] !== undefined) arrow.signal = arrow.refs[0].lastSignal;
};
colorExtracter.transmit = (arrow) => {
    if (arrow.signal > 0) {
        ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 0).signalsCount = arrow.signal;
    }
}

// endregion

// region doubleDetector1

const doubleDetector = mod.registerArrow(16)
doubleDetector.name = ["Double Detector", "Двойной Детектор", "Not supported", "Not supported"];
doubleDetector.activation = ["If the two arrows at the back are activated.", "Если две стрелочки сзади активированы.", "Not supported", "Not supported"];
doubleDetector.action = ["Sends a signal forward", "Передает сигнал вперед", "Not supported", "Not supported"];
doubleDetector.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow16.png";
doubleDetector.clickable = false;

doubleDetector.update = (arrow) => {
    arrow.signal = 0;
    const backward_arrow1 = ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 1, 0);
    const backward_arrow2 = ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 2, 0);
    if (backward_arrow1 !== undefined && backward_arrow2 !== undefined) {
        if (backward_arrow1.lastSignal !== 0 && backward_arrow2.lastSignal !== 0) {
            arrow.signal = 2;
        }
    };
};
doubleDetector.transmit = (arrow) => {
    if (arrow.signal === 2) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 0));
    }
}

// endregion

// region changeDetector1

const changeDetector = mod.registerArrow(17)
changeDetector.name = ["Change Detector", "Детектор Изменений", "Not supported", "Not supported"];
changeDetector.activation = ["If SIGNAL of the arrow at the back changed.", "Если стрелочка сзади изменила свое СОСТОЯНИЕ.", "Not supported", "Not supported"];
changeDetector.action = ["Sends a signal forward", "Передает сигнал вперед", "Not supported", "Not supported"];
changeDetector.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow18.png";
changeDetector.clickable = false;

changeDetector.update = (arrow) => {
    arrow.signal = 0;
    const backward_arrow = ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, 1, 0);
    if (backward_arrow !== undefined) {
        if (backward_arrow.signal !== backward_arrow.lastSignal) {
            arrow.signal = 4;
        }
    };
};
changeDetector.transmit = (arrow) => {
    if (arrow.signal === 4) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 0));
    }
}

// endregion
