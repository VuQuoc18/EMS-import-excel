import {
  AfterViewInit,
  Directive,
  Host,
  HostListener,
  Input,
  Optional,
  Renderer2,
  Self,
  ViewContainerRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatButton } from '@angular/material/button';

@Directive({
  selector: '[appPagination]',
})
export class PaginationDirective implements AfterViewInit {
  @Input('length') length: number;
  @Input('pageSize') pageSize: number;
  @Input('pageIndex') pageIndex: number;

  private currentPage = 1;
  private pageGapTxt2 = '..';
  private pageGapTxt = '•••';
  private rangeStart;
  private rangeEnd;
  private buttons = [];
  private showTotalPages1 = 3;

  constructor(
    @Host() @Self() @Optional() private readonly matPag: MatPaginator,
    private vr: ViewContainerRef,
    private ren: Renderer2
  ) {
    this.matPag.page.subscribe((v) => {
      this.currentPage = v.pageIndex;
      this.matPag.pageIndex = v.pageIndex;
      this.initPageRange();
    });
  }

  @HostListener('change') ngOnChanges() {
    this.matPag.page.next({
      length: this.length,
      pageSize: this.pageSize,
      pageIndex: this.pageIndex,
    });
  }
  private buildPageNumbers = () => {
    const actionContainer = this.vr.element.nativeElement.querySelector(
      'div.mat-paginator-range-actions'
    );
    const nextPageNode = this.vr.element.nativeElement.querySelector(
      'button.mat-paginator-navigation-next'
    );
    let prevButtonCount = this.buttons.length;

    // remove buttons before creating new ones
    if (prevButtonCount > 0) {
      this.buttons.forEach((button) => {
        this.ren.removeChild(actionContainer, button);
      });
      // Empty state array
      prevButtonCount = 0;
    }
    const pagecount = this.vr.element.nativeElement.childNodes[0].childNodes[0]
      .childNodes[1].childNodes[0];
    const container = this.vr.element.nativeElement.childNodes[0].childNodes[0]
      .childNodes[1];

    this.ren.setStyle(pagecount, 'white-space', 'nowrap');
    this.ren.setStyle(container, 'justify-content', 'flex-end');

    // Initialize next page and last page buttons
    if (prevButtonCount === 0) {
      const nodeArray = this.vr.element.nativeElement.childNodes[0]
        .childNodes[0].childNodes[1].childNodes;

      setTimeout(() => {
        for (const node of nodeArray) {
          if (node.nodeName === 'BUTTON') {
            // Next Button styles
            if (node.innerHTML.length > 100 && node.disabled) {
              this.ren.setStyle(node, 'color', '#CCC');
            } else if (node.innerHTML.length > 100 && !node.disabled) {
              this.ren.setStyle(node, 'color', '#999999');
            } else if (node.disabled) {
              this.ren.setStyle(node, 'background-color', '#3f51b5');
              this.ren.setStyle(node, 'color', '#fff');
            }
          }
        }
      });
    }

    let dots = false;
    let dots2 = false;

    this.ren.insertBefore(
      actionContainer,
      this.createButton(0, this.matPag.pageIndex),
      nextPageNode
    );
    const page = this.showTotalPages1 + 2;
    for (let i = 1; i < this.matPag.getNumberOfPages() - 1; i = i + 1) {
      if (
        (i < page && this.currentPage < this.showTotalPages1) ||
        (i >= this.rangeStart && i <= this.rangeEnd) ||
        (this.currentPage > this.matPag.length / this.matPag.pageSize - page &&
          i >= this.matPag.length / this.matPag.pageSize - page)
      ) {
        this.ren.insertBefore(
          actionContainer,
          this.createButton(i, this.matPag.pageIndex),
          nextPageNode
        );
      } else {
        if (i > this.rangeEnd && !dots) {
          this.ren.insertBefore(
            actionContainer,
            this.createButton(this.pageGapTxt, this.matPag.pageIndex),
            nextPageNode
          );
          dots = true;
        }
        if (i < this.rangeEnd && !dots2) {
          this.ren.insertBefore(
            actionContainer,
            this.createButton(this.pageGapTxt2, this.matPag.pageIndex),
            nextPageNode
          );
          dots2 = true;
        }
      }
    }

    if (this.matPag.getNumberOfPages() !== 1 && this.matPag.length !== 0) {
      this.ren.insertBefore(
        actionContainer,
        this.createButton(
          this.matPag.getNumberOfPages() - 1,
          this.matPag.pageIndex
        ),
        nextPageNode
      );
    }
  };

  private createButton(i: any, pageIndex: number): any {
    const linkBtn: MatButton = this.ren.createElement('button');
    this.ren.setAttribute(
      linkBtn,
      'style',
      `color: #333333;
       background: transparent;
       border-radius: 4px;
       border: none;
       margin: 1%;
       font-size: 14px;
       min-width: 24px;
       min-height: 24px;
       max-height: 24px;
       padding: unset`
    );
    if (i === this.pageGapTxt || i === this.pageGapTxt2) {
      this.ren.setStyle(linkBtn, 'color', '#999999');
    }

    const pagingTxt = isNaN(i) ? this.pageGapTxt : +(i + 1);
    const text = this.ren.createText(pagingTxt + '');

    this.ren.addClass(linkBtn, 'mat-custom-page');

    switch (i) {
      case pageIndex:
        this.ren.setAttribute(linkBtn, 'disabled', 'disabled');
        break;
      case this.pageGapTxt:
        this.ren.listen(linkBtn, 'click', () => {
          this.switchPage(this.currentPage + this.showTotalPages1);
        });
        break;
      case this.pageGapTxt2:
        this.ren.listen(linkBtn, 'click', () => {
          this.switchPage(this.currentPage - this.showTotalPages1);
        });
        break;
      default:
        this.ren.listen(linkBtn, 'click', () => {
          this.switchPage(i);
        });
        break;
    }

    this.ren.appendChild(linkBtn, text);
    // Add button to private array for state
    this.buttons.push(linkBtn);
    return linkBtn;
  }

  /**
   * @description calculates the button range based on class input parameters and based on current page index value.
   */
  private initPageRange(): void {
    this.rangeStart = this.currentPage - this.showTotalPages1 / 2;
    this.rangeEnd = this.currentPage + this.showTotalPages1 / 2;
    this.buildPageNumbers();
  }

  private switchPage(i: number): void {
    this.matPag.pageIndex = i;
    this.matPag.page.emit({
      previousPageIndex: this.currentPage,
      pageIndex: i,
      pageSize: this.matPag.pageSize,
      length: this.matPag.length,
    });
    this.currentPage = i;
    this.initPageRange();
  }

  public ngAfterViewInit(): void {
    this.rangeStart = 0;
    this.rangeEnd = this.showTotalPages1 - 1;
    this.initPageRange();
  }
}
