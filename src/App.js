import React, { useState } from 'react';
import './App.scss';
import NodeList from './node-list/node-list';

function App() {
  const [selectedNodes, setSelectedNodes] = useState({});
  const [tree, setTree] = useState({
    'root-id': {
      name: 'root',
      id: 'root-id',
      childs: {
        'child-id': {
          name: 'root',
          id: 'child-id',
          childs: [],
        },
      },
    },
  });
  // const nodes = {
  //   'root-id': { name: 'root', id: 'root-id', childs: [] },
  // };

  /* [
    {
      name: 'Pepperoni',
      id: 'pepperoni-id',
      childs: [
        {
          name: 'Spicy',
          id: 'spicy-id',
          childs: [],
        },
        {
          name: 'Regular',
          id: 'regular-id',
          childs: [],
        },
      ],
    },
    {
      name: 'Chicken',
      id: 'chicken-id',
      childs: [
        {
          name: 'Buffalo',
          id: 'buffalo-id',
          childs: [
            {
              name: 'Mild',
              id: 'mild-id',
              childs: [],
            },
            {
              name: 'Hot',
              id: 'hot-id',
              childs: [
                {
                  name: 'Jalapeño',
                  id: 'jalapeno-id',
                  childs: [],
                },
                {
                  name: 'Cayenne',
                  id: 'cayenne-id',
                  childs: [],
                },
              ],
            },
          ],
        },
        {
          name: 'BBQ',
          id: 'bbq-id',
          childs: [],
        },
      ],
    },
  ]; */

  return (
    <div className="container">
      <div className="wrapper">
        <NodeList
          tree={tree}
          onChange={selectedNodes => {
            console.log({ selectedNodes });
            setSelectedNodes(selectedNodes);
          }}
          onAddChild={node => {
            setTree({ ...tree, node });
          }}
          onRemoveNode={nodeId => {
            delete tree[nodeId];
            setTree(tree);
          }}
          selectedNodes={selectedNodes}
          isFirst={true}
        ></NodeList>
      </div>
    </div>
  );
}

export default App;
