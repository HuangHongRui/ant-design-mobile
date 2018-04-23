import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

export interface ModalPropsType {
  title?: JSX.Element;
  visible: boolean;
  maskClosable?: boolean;
  closable?: boolean;
  footer?: Action[];
  onClose?: () => void;
  transparent?: boolean;
  popup?: boolean;
  animated?: boolean;
  animationType?: any;
  onAnimationEnd?: (visible: boolean) => void;
  animateAppear?: boolean;
  operation?: boolean;
}

export interface Action {
  text: string;
  // Company Pro
  onPress?: (e?: any) => void | Promise<any>;
  style?: React.CSSProperties | StyleProp<TextStyle> | string;
}

// Company Pro
export type Callback = (valueOrLogin: string, password?: string, phone?: string, remark?: string) => void;
export type CallbackOrActions = Callback | Action[];
export abstract class ModalComponent<P, S> extends React.Component<P, S> {
  static alert: (
    // Company Pro
    title: JSX.Element | string,
    // Company Pro
    message: JSX.Element | string,
    actions?: Action[],
    platform?: string,
  ) => { close: () => void };

  static prompt: (
    // Company Pro
    title: JSX.Element | string,
    // Company Pro
    message: JSX.Element | string,
    callbackOrActions: CallbackOrActions,
    // Company Pro
    type?: 'default' | 'secure-text' | 'login-password' | 'remark' | 'custom',
    defaultValue?: string,
    placeholders?: string[],
    platform?: string,
  ) => { close: () => void };

  static operation: (
    actions?: Action[],
    platform?: string,
  ) => { close: () => void };
}
