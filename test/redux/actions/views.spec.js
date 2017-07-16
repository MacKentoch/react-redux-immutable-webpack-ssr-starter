import chai, {expect} from 'chai';
import dirtyChai      from 'dirty-chai';
import moment         from 'moment';
import {
  enterHome,
  leaveHome,
  enterAbout,
  leaveAbout
}                       from '../../../src/app/redux/modules/views';

const dateFormat = 'DD/MM/YYYY HH:mm';

chai.use(dirtyChai);


describe('redux - action creator "views"', () => {
  const  now = moment().format(dateFormat);

  it('should return enterHome action object', () => {
    const enterHomeACTION = {
      type:         'ENTER_HOME_VIEW',
      currentView:  'home',
      enterTime:    now,
      leaveTime:    null
    };
    expect(enterHome(now)).to.deep.equal(enterHomeACTION);
  });

  it('should return leaveHome action object', () => {
    const leaveHomeACTION = {
      type:         'LEAVE_HOME_VIEW',
      currentView:  'home',
      enterTime:    null,
      leaveTime:    now
    };
    expect(leaveHome(now)).to.deep.equal(leaveHomeACTION);
  });


  it('should return enterAbout action object', () => {
    const enterAboutACTION = {
      type:         'ENTER_ABOUT_VIEW',
      currentView:  'about',
      enterTime:    now,
      leaveTime:    null
    };
    expect(enterAbout(now)).to.deep.equal(enterAboutACTION);
  });

  it('should return leaveAbout action object', () => {
    const leaveAboutACTION = {
      type:         'LEAVE_ABOUT_VIEW',
      currentView:  'about',
      enterTime:    null,
      leaveTime:    now
    };
    expect(leaveAbout(now)).to.deep.equal(leaveAboutACTION);
  });
});
