(() => {
  let list = ['root'];

  const addNode = (parent, node) => {
    parent.childs = { ...parent.childs, node };
    return parent;
  };

  const removeNode = (parent, nodeId) => {
    parent.childs = parent.childs.filter(node => node.id !== nodeId);
    return parent;
  };

  const editNodeName = (node, name) => {
    return { ...node, name };
  };
  const makeList = array => {
    const ul = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
      ul.appendChild(
        document
          .createElement('li')
          .appendChild(document.createTextNode(array[i]))
      );
    }
    return ul;
  };
  const render = () => {
    document.getElementById('nested-list').appendChild(makeList(list));
  };
  render();
})();
