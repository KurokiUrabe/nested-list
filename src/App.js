import React, { useState } from 'react';
import classNames from 'classnames';
import './App.scss';
import NodesList from './node-list/nodes-list';

const removeDeep = (nodeId, nodes) => {
  return nodes.reduce((acc, node) => {
    if (nodeId !== node.id) {
      const newNode = { ...node };
      if (node.childs.length > 0) {
        newNode.childs = removeDeep(nodeId, node.childs);
      }
      return [...acc, newNode];
    }
    return acc;
  }, []);
};
const onAddNode = (parentId, label, nodes) => {
  if (parentId === undefined) {
    return [...nodes, { name: label, childs: [], id: `${label}-id` }];
  }
  return nodes.reduce((acc, node) => {
    if (parentId !== node.id) {
      const newNode = { ...node };
      if (node.childs.length > 0) {
        newNode.childs = onAddNode(parentId, label, node.childs);
      }
      return [...acc, newNode];
    }

    return [
      ...acc,
      {
        ...node,
        childs: [...node.childs, { name: label, childs: [], id: `${label}-id` }]
      }
    ];
  }, []);
};

const onEditingNode = (nodeId, label, nodes) => {
  return nodes.reduce((acc, node) => {
    if (nodeId !== node.id) {
      const newNode = { ...node };
      if (node.childs.length > 0) {
        newNode.childs = onAddNode(nodeId, label, node.childs);
      }
      return [...acc, newNode];
    }

    return [
      ...acc,
      {
        ...node,
        name: label
      }
    ];
  }, []);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      selectedNodes: {}
    };
  }

  render() {
    const { selectedNodes } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <h1>Nested List</h1>
          <NodesList
            nodes={this.state.nodes}
            onChange={selectedNodes => {
              if (this.state.debug) {
                alert(
                  `App Component:\n\nSetting selectedNodes state to\n\n${JSON.stringify(
                    selectedNodes,
                    null,
                    3
                  )}\n\nThen re-rendering!`
                );
              }
              this.setState({ selectedNodes });
            }}
            onRemove={nodeId => {
              const result = removeDeep(nodeId, this.state.nodes);
              console.log('Parent Removing', nodeId, {
                nodes: this.state.nodes,
                after: result
              });
              return this.setState({
                nodes: result
              });
            }}
            onAddNode={(parentId, label) => {
              return this.setState({
                nodes: onAddNode(parentId, label, this.state.nodes)
              });
            }}
            onEditingNode={(nodeId, label) => {
              return this.setState({
                nodes: onEditingNode(nodeId, label, this.state.nodes)
              });
            }}
            selectedNodes={selectedNodes}
            isFirst={true}
            debug={this.state.debug}
          />
        </div>
      </div>
    );
  }
}
export default App;
