import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        //todo hide db auth information
        MongooseModule.forRoot('mongodb+srv://user:user6@cluster0.k0nv8zz.mongodb.net/music-platform?retryWrites=true&w=majority'),
        TrackModule,
    ]
})
export class AppModule {
}