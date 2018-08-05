Settings documentation

Mobile view:
/settings route will render SettingsNavigation

```javascript
<Main>
  <Route path={"/settings"} exact component={SettingsNavigation} />
  <Route path={"/settings/account"} component={Account} />
  {"... other routes"}
</Main>
```

Desktop view:
/settings route will render Account and SettingsNavigation will already be visible

```javascript
<MainDesktop>
  <SettingsNavigation />
  <Route path={"/settings"} exact component={Account} />
  {"... other routes"}
</MainDesktop>
```

In SettingsNavigation possible case is when user has selected account settings on smaller screen but than he widened browser window, because of this case NavLink for ControlsDesktop is dynamic.

```javascript
<ControlsItem
  to={pathname === "/settings/account" ? "/settings/account" : "/settings"}
  exact
>
  Account
</ControlsItem>
```
