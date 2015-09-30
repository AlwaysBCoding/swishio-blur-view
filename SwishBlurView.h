#import "RCTView.h"

@class RCTEventDispatcher;

@interface SwishBlurView : UIView

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end