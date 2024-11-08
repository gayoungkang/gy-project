import React, { useState, ReactNode } from "react";
import styled from "@emotion/styled";
import { theme } from "@styles/theme";
import { COMMON_PARENTS_ELEMENT_ZINDEX } from "@constants/zIndex";

export type Tabs = {
  label: string;
  value: string;
  component?: ReactNode;
};

type TabProps = {
  value: string;
  onChange: (value: string) => void;
  tabs?: Tabs[];
  top?: string;
  children?: React.ReactNode;
};

const Tab = (props: TabProps) => {
  const { value, onChange, tabs, top } = props;

  return (
    <TabContainer>
      <StyledTabList top={top}>
        {tabs?.map((tab) => (
          <StyledTab
            key={"Tab_" + tab.value}
            isActive={tab.value === value}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </StyledTab>
        ))}
        {props.children}
      </StyledTabList>

      {tabs?.map((tab) =>
        tab.value === value ? (
          <StyledTabPanel key={"TabPanel_" + tab.value}>
            {tab.component}
          </StyledTabPanel>
        ) : null
      )}
    </TabContainer>
  );
};

const TabContainer = styled.div`
  width: 100%;
`;

const StyledTabList = styled.div<{ top?: string }>`
  display: flex;
  position: sticky;
  z-index: ${COMMON_PARENTS_ELEMENT_ZINDEX};
  top: ${(props) => props.top ?? 0};
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: ${theme.color.background.dark};
  border-bottom: 1px solid ${theme.color.divider};
`;

const StyledTab = styled.button<{ isActive: boolean }>`
  padding: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: ${theme.fontSize.medium};
  color: ${(props) =>
    props.isActive ? theme.color.primary.main : theme.color.text.primary};
  border-bottom: 2px solid
    ${(props) => (props.isActive ? theme.color.primary.main : "transparent")};
  transition: color 0.3s, border-bottom 0.3s;

  &:hover {
    color: ${theme.color.primary.dark};
  }
`;

const StyledTabPanel = styled.div`
  padding: 1rem;
`;

export default Tab;
