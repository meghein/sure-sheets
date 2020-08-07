import Konva from 'konva'

export default function StageLoader(clippingHistory, setClippingHistory) {
  let historyStep = 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const layer = new Konva.Layer();

  function loadTemplate(template) {
    const newStage = Konva.Node.create(template, 'canvas');
    newStage.add(layer);;
    return newStage
  }

  function createObject(attrs) {
    return Object.assign({}, attrs, {
      text: '',
      src: '',
      x: 0,
      y: 0,

    });
  }

  function createImage(attrs, source) {
    return Object.assign(createObject(attrs), {
      src: source,
    });
  }

  function createText(attrs, text) {
    return Object.assign(createObject(attrs), {
      text: text,
    });
  }

  function create() {
    layer.destroyChildren();
    clippingHistory.forEach((item, index) => {
      let node = '';
      if (item.src) {
        node = new Konva.Image({
          draggable: true,
          name: 'item-' + index,
        });
      } else if (item.text) {
        node = new Konva.Text({
          text: item.text,
          draggable: true,
          name: 'item-' + index,
        });
      }
      
      layer.add(node);
      node.on('dragend', () => {
        const tempState = [...clippingHistory];
        tempState[index] = Object.assign({}, tempState[index], {
          x: node.x(),
          y: node.y(),
        });
        // save it into history
        setClippingHistory(tempState);

      });

      node.on('click', () => {
        const tempState = [...clippingHistory];
        tempState[index] = Object.assign({}, tempState[index]);
        setClippingHistory(tempState);
        // update canvas from clippingHistory
        update(clippingHistory);
      });

      let img = new window.Image();
      img.onload = function () {
        node.image(img);
        update(clippingHistory);
        layer.batchDraw();
      };
      img.src = item.src;
    });
    update(clippingHistory);
  }

  function update() {
    clippingHistory.forEach(function (item, index) {
      let node = loadTemplate().findOne('.item-' + index);
      node.setAttrs({
        x: item.x,
        y: item.y,
      });
    });
    layer.batchDraw();
  }

  create(clippingHistory);

  function addImage() {
    const tempState = [...clippingHistory];
    tempState.push(
      createImage({
        x: width * Math.random(),
        y: height * Math.random(),
      })
    );
    setClippingHistory(tempState)
    // recreate canvas
    create(clippingHistory);
  };

  function addText() {
    const tempState = [...clippingHistory];
    tempState.push(
      createText({
        x: width * Math.random(),
        y: height * Math.random(),
      })
    );
    setClippingHistory(tempState)
    create(clippingHistory);
  };

  function handleUndo() {
    if (historyStep === 0) {
      layer.destroyChildren();;
    }
    historyStep -= 1;
    const tempState = [...clippingHistory];
    tempState.pop()
    setClippingHistory(tempState)
    // create everything from scratch
    create(clippingHistory);
  };
    
  return {
    historyStep,
    loadTemplate,
    createImage,
    createText,
    create,
    update,
    addImage,
    addText,
    handleUndo
  }
}
