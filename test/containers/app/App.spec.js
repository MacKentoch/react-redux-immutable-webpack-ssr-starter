import React                from 'react';
import {expect}             from 'chai';
import {shallow}            from 'enzyme';
import configureMockStore   from 'redux-mock-store';
import thunk                from 'redux-thunk';
import App                  from '../../../src/app/containers/app/App';
import { fromJS }           from 'immutable';

const mockStore = configureMockStore([ thunk ]);
const storeStateMock = fromJS({
  views: {
    currentView: 'home'
  }
});

let store;
let wrapper;
describe('App', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = shallow(<App store={store} />).shallow();
  });

  it('should render <App />', () => {
    expect(wrapper.find('NavigationBar').length).to.equal(1);
  });
});
