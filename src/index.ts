import { Manager } from './manager';
import { LoaderScene } from './scenes/loader-scene';

Manager.initialize(640, 480, 0x6495ed);

// We no longer need to tell the scene the size because we can ask Manager!
const loady: LoaderScene = new LoaderScene();
Manager.changeScene(loady);