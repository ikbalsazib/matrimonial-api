import { ProductModule } from './pages/product/product.module';
import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './pages/user/user.module';
import { AdminModule } from './pages/admin/admin.module';
import { UtilsModule } from './shared/utils/utils.module';
import { UploadModule } from './pages/upload/upload.module';
import { DbToolsModule } from './shared/db-tools/db-tools.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

import { ReviewModule } from './pages/review/review.module';
import { ProfileModule } from './pages/profile/profile/profile.module';

import { AdditionalPageModule } from './pages/additional-page/additional-page.module';

import { WishListModule } from './pages/wish-list/wish-list.module';

import { FileFolderModule } from './pages/file-folder/file-folder.module';
import { GalleryModule } from './pages/gallery/gallery.module';

import { OtpModule } from './pages/otp/otp.module';
import { BulkSmsModule } from './shared/bulk-sms/bulk-sms.module';
import { ContactRequestModule } from './pages/contact-request/contact-request.module';
import { ManagementModule } from './pages/management/management.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRoot(configuration().mongoCluster),
    CacheModule.register({ ttl: 200, max: 10, isGlobal: true }),
    AdminModule,
    UserModule,
    UtilsModule,
    DbToolsModule,
    UploadModule,
    DashboardModule,
    ProductModule,
    ReviewModule,
    ProfileModule,
    AdditionalPageModule,
    WishListModule,
    FileFolderModule,
    GalleryModule,
    OtpModule,
    BulkSmsModule,
    ContactRequestModule,
    ManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
