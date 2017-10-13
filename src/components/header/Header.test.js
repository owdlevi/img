import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { mount, shallow, configure } from "enzyme";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import Adapter from 'enzyme-adapter-react-15';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";

import Header from "./Header";
configure({ adapter: new Adapter() });
const mockStore = configureStore([thunk]);



const history = createHistory();
describe("Header ", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      'reducers':{
        search: []
      }
    });
  });
  it("Header renders without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header/>
        </ConnectedRouter>
      </Provider>
    );
  });

  it("Header should contain `BJJS FE Test` text", () => {
  const wrapper = mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header />
      </ConnectedRouter>
    </Provider>
  );
  expect(wrapper.find('a.brand-logo').text()).toBe('Movie Finder')
})

});
