## Reskeleton

<img align="center" width="250px" src="./reskeleton-image.gif"/>

<span align="center">A comfortable and beautiful Rescript skeleton component</span>



# Install

- With npm

```bash
npm install --save reskeleton
```

- With yarn

```bash
yarn add reskeleton
```

Add `"reskeleton"` to `bsconfig`:

```js
"bs-dependencies": [
    ...
    "reskeleton"
],
```

## Usage

- Block

```reason
<Reskeleton />
```

```reason
<Reskeleton radius="20px" width="100px" height="100px"/>
```

- Text

```reason
<h1>
    <Reskeleton variant=`text />
</h1>
```

- Circle

```reason
<Reskeleton variant=`circle />
```

```reason
<Reskeleton variant=`circle width="100px" height="100px" />
```

## Road map

- [ ] Tests 

# Feel free to give your contribution
