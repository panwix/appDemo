//
//  MyCustomViewManager.m
//  appDemo
//
//  Created by Panwix on 7/8/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTViewManager.h"
@interface MyCustomViewManager : RCTViewManager
@end
@implementation MyCustomViewManager
- (UIView *)view
{
  return [[MyCustomView alloc] init];
}
RCT_EXPORT_VIEW_PROPERTY(myCustomProperty);
@end
