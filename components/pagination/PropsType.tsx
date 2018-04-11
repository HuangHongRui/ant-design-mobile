export interface PaginationPropsType {
  mode?: 'button' | 'number' | 'pointer';
  simple?: boolean;
  current: number;
  total: number;
  // Company Pro
  locale: {
    prevText?: string | React.ReactNode;
    nextText?: string | React.ReactNode;
  };
  onPrev?: () => void;
  onNext?: () => void;
  onChange?: (current: number) => void;
}

export interface PaginationState {
  current: number;
}
