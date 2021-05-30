//
//  RCTTorchModule.m
//  rn_flash
//
//  Created by Praveen on 30/05/21.
//

#import "RCTTorchModule.h"
#import <React/RCTLog.h>
#import <AVFoundation/AVFoundation.h>

@implementation RCTTorchModule

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(hasTorch:(nonnull NSNumber *)reactTag
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  
  @try {
      AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
      resolve(@(device.hasTorch));
  } @catch(NSException *exception) {
      reject(@"Convert Error", @"Could not open the file.", nil);
  }

}

RCT_EXPORT_METHOD(torchOn:(nonnull NSNumber *)reactTag
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
        
  @try {
    AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
    if ([device hasTorch]){

        [device lockForConfiguration:nil];
      RCTLogInfo(device.isTorchActive ? @"Yes" : @"No", @"is Torch already open");
        if (!device.isTorchActive) {
          [device setTorchModeOnWithLevel:AVCaptureMaxAvailableTorchLevel error:nil];
        }
        [device unlockForConfiguration];
    }
    
    resolve(@(true));
  }@catch(NSException *exception) {
    reject(@"Something went wrong", exception.reason, nil);
  }
        
}

RCT_EXPORT_METHOD(torchOff:(nonnull NSNumber *)reactTag
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
        
  @try {
    AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
    if ([device hasTorch]){

        [device lockForConfiguration:nil];
      RCTLogInfo(device.isTorchActive ? @"Yes" : @"No", @"is Torch already open");
        if (device.isTorchActive) {
          [device setTorchMode:AVCaptureTorchModeOff];
        }
        [device unlockForConfiguration];
    }
    
    resolve(@(false));
  }@catch(NSException *exception) {
    reject(@"Something went wrong", exception.reason, nil);
  }
        
}
 
@end
