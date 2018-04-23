import React from 'react';

export interface CardPropsType {
  full?: boolean;
}

export interface CardHeaderPropsType {
  // Company Pro
  title?: JSX.Element | string;
  /** need url of img, if this is string. */
  thumb?: React.ReactNode;
  extra?: JSX.Element;
}

export interface CardFooterPropsType {
  // Company Pro
  content?: JSX.Element | React.ReactNode;
  extra?: JSX.Element;
  // Company Pro
  onClick?: Function;
}
