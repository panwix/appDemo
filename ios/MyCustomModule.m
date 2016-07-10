//
//  MyCustomModule.m
//  appDemo
//
//  Created by Panwix on 7/8/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface MyCustomModule : NSObject <RCTBridgeModule>
@end

@implementation MyCustomModule
RCT_EXPORT_MODULE();
// Available as NativeModules.MyCustomModule.processString
RCT_EXPORT_METHOD(processString:(NSString *)input callback:(RCTResponseSenderBlock)callback)
{
  callback(@[[input stringByReplacingOccurrencesOfString:@"Goodbye" withString:@"Hello"]]);
}
@end