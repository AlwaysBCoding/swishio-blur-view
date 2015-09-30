#import "SwishBlurViewManager.h"
#import "RCTBridge.h"
#import "RCTConvert.h"
#import <RCTView.h>
#import "SwishBlurView.h"

@interface SwishBlurViewManager ()

@end

@implementation SwishBlurViewManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[SwishBlurView alloc]  initWithEventDispatcher:self.bridge.eventDispatcher];
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}


RCT_EXPORT_VIEW_PROPERTY(blurType, NSString);

@end