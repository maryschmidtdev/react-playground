import React from "react";

const sectionsProps = [
  { title: "Section 1", content: "Lorem ipsum dolor" },
  { tilte: "Section 2", content: "Cupiditate tenetur aliquam" },
  { title: "Section 3", content: "Animi amet cumque sint" },
];

class Accordion extends React.Component {
  static defaultProps = { sections: [] };
  state = { currentSectionsIndex: 0 };

  handleButtonClick = (index) => {
    this.setState({ currentSectionsIndex: index });
  };

  renderButtons() {
    return this.props.sections.map((section, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {sectionsProps.title}
      </button>
    ));
  }
  renderContent() {
    const currentSections = this.props.sections[
      this.state.currentSectionsIndex
    ];
    return <div className="content">{currentSections.content}</div>;
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.renderButtons()}
            {!!this.props.sections.length && this.renderContent()}
          </li>
        </ul>
      </div>
    );
  }
}

export default Accordion;
