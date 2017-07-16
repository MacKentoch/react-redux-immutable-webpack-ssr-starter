import React              from 'react';
import { shallow }        from 'enzyme';
import chai, {expect}     from 'chai';
import dirtyChai          from 'dirty-chai';
import LeftNav            from '../../../../src/app/components/navigation/leftNav/LeftNav';
import { fromJS }         from 'immutable';

chai.use(dirtyChai);

const leftLinksMock = fromJS([
  {
    label:      'a left Link',
    link:       'link1',
    view:       'fake',
    isRouteBtn: false
  },
  {
    label:      'another left Link',
    link:       'link2',
    view:       'fake2',
    isRouteBtn: true
  }
]);

// avoid to eslint-disable for chai no-unsued-expressions
chai.use(dirtyChai);

describe('<LeftNav />', () => {
  const props = {
    leftLinks: leftLinksMock,
    onLeftNavButtonClick: ()=>{}
  };

  it('should render a LeftNav', () => {
    const wrapper = shallow(<LeftNav {...props} />);

    expect(wrapper).to.exist();
  });

  describe('child <LeftNavButton />', () => {
    it('should exist', () => {
      const wrapper = shallow(<LeftNav {...props} />);
      const LeftNavButton = wrapper.find('LeftNavButton');

      expect(LeftNavButton).to.exist();
    });

    it('should be 2 LeftNavButton', () => {
      const wrapper = shallow(<LeftNav {...props} />);
      const LeftNavButton = wrapper.find('LeftNavButton');

      expect(LeftNavButton.length).to.equal(2);
    });

    describe('first LeftNavButton', () => {
      it('should be passed props label:string set to mock value', () => {
        const wrapper = shallow(<LeftNav {...props} />);
        const LeftNavButton = wrapper.find('LeftNavButton');

        expect(LeftNavButton.first().prop('label')).to.equal(leftLinksMock.getIn([0, 'label']));
      });

      it('should be passed props link:string set to mock value', () => {
        const wrapper = shallow(<LeftNav {...props} />);
        const LeftNavButton = wrapper.find('LeftNavButton');

        expect(LeftNavButton.first().prop('link')).to.equal(leftLinksMock.getIn([0, 'link']));
      });

      it('should be passed props viewName:string set to mock value', () => {
        const wrapper = shallow(<LeftNav {...props} />);
        const LeftNavButton = wrapper.find('LeftNavButton');

        expect(LeftNavButton.first().prop('viewName')).to.equal(leftLinksMock.getIn([0, 'view']));
      });

      it('should be passed props onClick:function to be a function', () => {
        const wrapper = shallow(<LeftNav {...props} />);
        const LeftNavButton = wrapper.find('LeftNavButton');

        expect(typeof LeftNavButton.first().prop('onClick')).to.equal('function');
      });
    });

    describe('second LeftNavButton', () => {
      const secondLeftNavButtonIndex = 1;

      it('should be passed props label:string set to mock value', () => {
        const wrapper = shallow(<LeftNav {...props} />);
        const LeftNavButton = wrapper.find('LeftNavButton');

        expect(LeftNavButton.at(secondLeftNavButtonIndex).prop('label')).to.equal(leftLinksMock.getIn([secondLeftNavButtonIndex, 'label']));
      });

      it('should be passed props link:string set to mock value', () => {
        const wrapper = shallow(<LeftNav {...props} />);
        const LeftNavButton = wrapper.find('LeftNavButton');

        expect(LeftNavButton.at(secondLeftNavButtonIndex).prop('link')).to.equal(leftLinksMock.getIn([secondLeftNavButtonIndex, 'link']));
      });

      it('should be passed props viewName:string set to mock value', () => {
        const wrapper = shallow(<LeftNav {...props} />);
        const LeftNavButton = wrapper.find('LeftNavButton');

        expect(LeftNavButton.at(secondLeftNavButtonIndex).prop('viewName')).to.equal(leftLinksMock.getIn([secondLeftNavButtonIndex, 'view']));
      });

      it('should be passed props onClick:function to be a function', () => {
        const wrapper = shallow(<LeftNav {...props} />);
        const LeftNavButton = wrapper.find('LeftNavButton');

        expect(typeof LeftNavButton.at(secondLeftNavButtonIndex).prop('onClick')).to.equal('function');
      });
    });
  });
});
