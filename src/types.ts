import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface CoachmarkProps {
  message?: string;
  autoShow?: boolean;
  onHide?: () => void;
  onShow?: () => void;
  isAnchorReady?: boolean;
  renderArrow?: CoachmarkViewProps['renderArrow'];
  renderContent?: CoachmarkViewProps['renderContent'];
  accessibilityLabel?: string;
  testID?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  backdropColor?: string;
  arrowColor?: string;
}

export enum CoachmarkPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export interface CoachmarkArrowProps {
  position?: CoachmarkPosition;
  arrowColor?: string;
  x: number;
}

export interface CoachmarkContentProps {
  message?: string;
  buttonText?: string;
}

export type CoachmarkViewProps = {
  renderArrow: ({
    x,
    position,
    arrowColor,
  }: {
    x: number;
    position?: CoachmarkPosition;
    arrowColor?: string;
  }) => React.ReactElement<CoachmarkArrowProps>;
  renderContent?: () => React.ReactElement;
} & CoachmarkContentProps &
  CoachmarkArrowProps &
  Pick<CoachmarkProps, 'arrowColor'>;
