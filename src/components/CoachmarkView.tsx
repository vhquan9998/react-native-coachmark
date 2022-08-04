import React, { Component } from 'react';
import CoachmarkContent from './CoachmarkContent';
import CoachmarkArrow from './CoachmarkArrow';
import { CoachmarkPosition, CoachmarkViewProps } from '../types';

export default class CoachmarkView extends Component<CoachmarkViewProps> {
  static defaultProps: Pick<CoachmarkViewProps, 'position' | 'renderArrow'> = {
    position: CoachmarkPosition.TOP,
    renderArrow: ({ x, position, arrowColor }) => <CoachmarkArrow x={x} position={position} arrowColor={arrowColor} />,
  };

  renderCoachmarkContent() {
    if (this.props.renderContent) {
      return this.props.renderContent();
    }
    return <CoachmarkContent message={this.props.message} />;
  }

  renderCoachmarkArrow() {
    const { renderArrow, x, position, arrowColor } = this.props;
    return renderArrow({ x, position, arrowColor });
  }

  render() {
    return this.props.position === CoachmarkPosition.TOP ? (
      <React.Fragment>
        {this.renderCoachmarkArrow()}
        {this.renderCoachmarkContent()}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {this.renderCoachmarkContent()}
        {this.renderCoachmarkArrow()}
      </React.Fragment>
    );
  }
}
