import React              from 'react';
import {
  shallow,
  mount
}                         from 'enzyme';
import chai, {expect}     from 'chai';
import dirtyChai          from 'dirty-chai';
// import { NavigationBar }  from '../../../src/app/components';
import NavigationBar      from '../../../src/app/components/navigation/NavigationBar';
import { fromJS }         from 'immutable';

chai.use(dirtyChai);

const navModelImmutable = fromJS({
  brand:      'React Redux Bootstrap Starter',
  leftLinks:  [
    {
      label:      'a left Link',
      link:       '',
      view:       'fake',
      isRouteBtn: false
    }
  ],
  rightLinks: [
    {
      label:      'Home',
      link:       '/',
      view:       'home',
      isRouteBtn: true
    },
    {
      label:      'About',
      link:       '/about',
      view:       'about',
      isRouteBtn: true
    }
  ]
});

// avoid to eslint-disable for chai no-unsued-expressions
chai.use(dirtyChai);

describe('<NavigationBar />', () => {
  const testBrandName = 'test';

  const props = {
    brand: testBrandName,
    handleLeftNavItemClick:   () => {},
    handleRightNavItemClick:  () => {},
    navModel: navModelImmutable
  };

  it('should render a NavigationBar', () => {
    const wrapper = shallow(<NavigationBar {...props} />);
    expect(wrapper).to.exist();
  });

  it('should display a brand name', () => {
    const wrapper = mount(<NavigationBar {...props} />);
    expect(wrapper.prop('brand')).to.equal(testBrandName);
  });

  describe('child <LeftNav />', () => {
    it('should be passed props leftLinks:of type Array', () => {
      const wrapper = mount(<NavigationBar {...props} />);
      const LeftNav = wrapper.find('LeftNav');
      expect(Array.isArray(LeftNav.prop('leftLinks').toJS())).to.equal(true);
    });

    it('should be passed props leftLinks:array of object with length 1', () => {
      const wrapper = shallow(<NavigationBar {...props} />);
      const LeftNav = wrapper.find('LeftNav');
      expect((LeftNav.prop('leftLinks').toJS()).length).to.equal(1);
    });

    it('should be passed props onLeftNavButtonClick:func', () => {
      const wrapper = shallow(<NavigationBar {...props} />);
      const LeftNav = wrapper.find('LeftNav');
      expect(typeof LeftNav.prop('onLeftNavButtonClick')).to.equal('function');
    });
  });

  describe('child <RightNav />', () => {
    it('should be passed props rightLinks:array of object with length 2', () => {
      const wrapper = shallow(<NavigationBar {...props} />);
      const RightNav = wrapper.find('RightNav');
      expect(RightNav.prop('rightLinks').toJS().length).to.equal(2);
    });

    it('should be passed props onRightNavButtonClick:func', () => {
      const wrapper = shallow(<NavigationBar {...props} />);
      const RightNav = wrapper.find('RightNav');
      expect(typeof RightNav.prop('onRightNavButtonClick')).to.equal('function');
    });
  });

  describe('child <Humburger />', () => {
    it('should exist', () => {
      const wrapper = shallow(<NavigationBar {...props} />);
      const Humburger = wrapper.find('Humburger');
      expect(Humburger).to.exist();
    });
  });
});
