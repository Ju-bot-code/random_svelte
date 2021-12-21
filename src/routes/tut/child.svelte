<script>
    export let value ='we dont know yet';
    export let name;
    export let speed;
    export let version;
    export let website;

    // export let pkg;
    // let {name,speed,version,website}=pkg;
    
</script>

    <h1>the esported value is "{value}" </h1>

    <p>
        The <code>{name}</code> package is {speed} fast.
        Download version {version} from <a href="https://www.npmjs.com/package/{name}">npm</a>
        and <a href={website}>learn more here</a>
    </p>