Toolbar container has 4 states:

loading

```javascript
<UserCircle />
```

nameFirstLetter

```javascript
<UserCircle>{nameFirstLetter}</UserCircle>
```

profilePhotoURL loading

```javascript
<React.Fragment>
  <UserCircle>{nameFirstLetter}</UserCircle>
  <Photo src={profilePhotoURL} onLoad={this.handleImageLoaded} show={false} />
</React.Fragment>
```

profilePhotoURL loaded

```javascript
<Photo
  src={profilePhotoURL}
  onLoad={this.handleImageLoaded}
  show={this.state.imageLoaded}
/>
```
