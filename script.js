// hint : es 6 

        let zIndexCounter = 1;
        
        const addText = () => {
            let editableArea = document.getElementById("editable");
            const textSize = document.getElementById('size').value + 'px';
            const fontFamily = document.getElementById('font').innerText;
            const textColor = document.getElementById('text-color').value;

            const textElement = document.createElement('div');
            textElement.contentEditable = true;
            textElement.className = 'draggable';
            textElement.innerHTML = 'Type here';
            textElement.style.fontSize = textSize;
            textElement.style.color = textColor;
            textElement.style.fontFamily = fontFamily;
            textElement.style.display = "inline-block";
            textElement.style.width = "fit-content";
            textElement.classList.add("draggable");
            textElement.classList.add("textElements");

            editableArea.appendChild(textElement);
            zIndexCounter++;
            textElement.style.zIndex = zIndexCounter;

            textElement.addEventListener('mousedown', function (e) {
                let offsetX = e.clientX - textElement.getBoundingClientRect().left;
                let offsetY = e.clientY - textElement.getBoundingClientRect().top;

                // function dragMove(moveEvent) {
                //     textElement.style.left = Math.min(editableArea.offsetWidth - textElement.offsetWidth,
                //         Math.max(0, moveEvent.clientX - offsetX))-300 + 'px';
                //     textElement.style.top = Math.min(editableArea.offsetHeight - textElement.offsetHeight,
                //         Math.max(0, moveEvent.clientY - offsetY)) + 'px';
                // }
                function dragMove(moveEvent) {
                    let x = moveEvent.clientX - offsetX;
                    let y = moveEvent.clientY - offsetY
        
                    const containerRect = editableArea.getBoundingClientRect();
        
                    if (x >= containerRect.left && x + textElement.clientWidth <= containerRect.right &&
                        y >= containerRect.top && y + textElement.clientHeight <= containerRect.bottom) {
                        textElement.style.left = x -100 + 'px';
                        textElement.style.top = y -10 + 'px';
                    }
                }

                function dragEnd() {
                    document.removeEventListener('mousemove', dragMove);
                    document.removeEventListener('mouseup', dragEnd);
                }

                document.addEventListener('mousemove', dragMove);
                document.addEventListener('mouseup', dragEnd);
            });
        }

        const toggleFontMenu = () => {
            let fontMenu = document.getElementById('font-menu');
            fontMenu.classList.toggle('menu-open');
        }

        const changeFont = (font) => {
            let selectedFont = document.getElementById('font');
            selectedFont.innerText = font;
            toggleFontMenu();
        }

  
