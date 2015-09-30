#import "RCTView.h"

@class RCTEventDispatcher;

@interface BlurView : UIView

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end