import React from 'react';
import SidebarLeftLayer from './SidebarLeftLayer';

interface SidebarLeftLayersProps {
  layers: srm.AppArtboardLayer[];
  selection: srm.AppLayer | null;
  setSelection(selection: srm.AppLayer | null): void;
  setHover(hover: srm.AppLayer | null): void;
  setGroupSelection(groupSelection: srm.Group | null): void;
  nestPadding?: number;
}

const SidebarLeftLayers = (props: SidebarLeftLayersProps) => {
  const { layers, selection, setSelection, setHover, setGroupSelection, nestPadding } = props;
  return (
    <div className='c-sidebar-left__layers'>
      {
        layers.map((layer: srm.AppArtboardLayer, index: number) => (
          <SidebarLeftLayer
            key={index}
            layer={layer}
            nestPadding={nestPadding}
            selection={selection}
            setSelection={setSelection}
            setHover={setHover}
            setGroupSelection={setGroupSelection} />
        ))
      }
    </div>
  )
};

export default SidebarLeftLayers;