# useEffect

## Reference
*useEffect(setup, dependencies?)*


Use Effect that works on side Effect.Every re-render useEffect function calls every time. You can control useEffect by dependencies which can change outside of useEffect hook.When you give blank array in dependenci that works only first time. Return a function when componont is going unmount. Call useEffect at the top level of your component to declare an Effect:
```
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
```
## Parameters

- setup: The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. When your component is added to the DOM, React will run your setup function.
 After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values.
   After your component is removed from the DOM, React will run your cleanup function.

- ptional dependencies: The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.
- If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3].
- React will compare each dependency with its previous value using the Object.is comparison. If you omit this argument, your Effect will re-run after every re-render of the component.
-  See the difference between passing an array of dependencies, an empty array, and no dependencies at all.

