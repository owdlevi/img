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

import SearchBar from "./SearchBar";
configure({ adapter: new Adapter() });
const mockStore = configureStore([thunk]);



const history = createHistory();
describe("SearchBar", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      'reducers':{
        search: []
      }
    });
  });
  it("SearchBar renders without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <SearchBar />
        </ConnectedRouter>
      </Provider>
    );
  });

  it("SearchBar should contain one input and a button", () => {
  const wrapper = mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <SearchBar  />
      </ConnectedRouter>
    </Provider>
  );
  const input = wrapper.find('input');
  expect(input.length).toEqual(1)

  const btn = wrapper.find('button');
  expect(btn.length).toEqual(1)

})

});
